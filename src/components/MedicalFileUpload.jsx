import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, FileImage, FileText, CheckCircle2, AlertCircle, ShieldCheck, Lock } from 'lucide-react';

const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
const ALLOWED_EXT = ['JPG', 'PNG', 'PDF'];

const FileIcon = ({ type }) => {
  if (type === 'application/pdf') return <FileText size={20} className="text-red-500" />;
  return <FileImage size={20} className="text-blue-500" />;
};

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MedicalFileUpload = ({ isEn = false, onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState([]);
  const inputRef = useRef(null);

  const labels = {
    title: isEn ? 'Upload Photos or X-Rays' : 'Încarcă fotografii sau radiografii',
    subtitle: isEn
      ? 'Drag & drop your files here, or click to browse'
      : 'Trage fișierele aici sau dă clic pentru a selecta',
    formats: isEn ? 'Accepted formats:' : 'Formate acceptate:',
    maxSize: isEn ? `Max file size: ${MAX_SIZE_MB}MB` : `Dimensiune maximă: ${MAX_SIZE_MB}MB`,
    perFile: isEn ? 'per file' : 'per fișier',
    remove: isEn ? 'Remove' : 'Elimină',
    gdpr: isEn
      ? 'Your medical data is processed securely and remains confidential.'
      : 'Datele tale medicale sunt procesate în siguranță și rămân confidențiale.',
    errorSize: (name) =>
      isEn
        ? `"${name}" exceeds ${MAX_SIZE_MB}MB limit.`
        : `"${name}" depășește limita de ${MAX_SIZE_MB}MB.`,
    errorType: (name) =>
      isEn
        ? `"${name}" is not an accepted format. Use JPG, PNG or PDF.`
        : `"${name}" nu este un format acceptat. Folosiți JPG, PNG sau PDF.`,
    filesAdded: isEn ? 'file(s) attached' : 'fișier(e) atașat(e)',
  };

  const validateAndAddFiles = useCallback(
    (newFiles) => {
      const errs = [];
      const valid = [];

      Array.from(newFiles).forEach((file) => {
        if (!ALLOWED_TYPES.includes(file.type)) {
          errs.push(labels.errorType(file.name));
          return;
        }
        if (file.size > MAX_SIZE_BYTES) {
          errs.push(labels.errorSize(file.name));
          return;
        }
        // Prevent duplicates
        const isDuplicate = files.some((f) => f.name === file.name && f.size === file.size);
        if (!isDuplicate) {
          valid.push(
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );
        }
      });

      setErrors(errs);

      if (valid.length > 0) {
        const updated = [...files, ...valid];
        setFiles(updated);
        onFilesChange?.(updated);
      }
    },
    [files, labels, onFilesChange]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      validateAndAddFiles(e.dataTransfer.files);
    },
    [validateAndAddFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleRemove = (index) => {
    const updated = files.filter((_, i) => i !== index);
    URL.revokeObjectURL(files[index].preview);
    setFiles(updated);
    onFilesChange?.(updated);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  return (
    <div className="space-y-3">
      {/* Label */}
      <label
        id="file-upload-label"
        className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2"
      >
        {labels.title}
      </label>

      {/* Drop Zone */}
      <div
        role="button"
        tabIndex={0}
        aria-labelledby="file-upload-label"
        aria-describedby="file-upload-hint"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        className={`
          relative rounded-2xl border-2 border-dashed p-6 md:p-8 transition-all duration-300 cursor-pointer
          flex flex-col items-center justify-center text-center
          focus:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2
          ${isDragging
            ? 'border-accent bg-accent/5 scale-[1.01] shadow-lg shadow-accent/10'
            : files.length > 0
            ? 'border-green-400 bg-green-50/50'
            : 'border-gray-200 bg-gray-50/70 hover:border-accent/60 hover:bg-accent/3'
          }
        `}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={(e) => validateAndAddFiles(e.target.files)}
          aria-hidden="true"
        />

        {/* Animated Upload Icon */}
        <div
          className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300
            ${isDragging
              ? 'bg-accent text-prime scale-110 shadow-lg shadow-accent/30'
              : files.length > 0
              ? 'bg-green-100 text-green-600'
              : 'bg-prime/5 text-prime/60'
            }
          `}
        >
          {files.length > 0 && !isDragging ? (
            <CheckCircle2 size={32} />
          ) : (
            <Upload size={32} className={isDragging ? 'animate-bounce' : ''} />
          )}
        </div>

        {/* Drop Zone Text */}
        {isDragging ? (
          <p className="text-accent font-bold text-lg">
            {isEn ? 'Drop your files here!' : 'Eliberează fișierele!'}
          </p>
        ) : files.length > 0 ? (
          <p className="text-green-700 font-bold text-sm">
            {files.length} {labels.filesAdded}
          </p>
        ) : (
          <>
            <p className="font-bold text-prime text-sm md:text-base mb-1">
              {labels.subtitle}
            </p>
            <p id="file-upload-hint" className="text-gray-400 text-xs">
              {labels.formats}{' '}
              <span className="font-bold text-prime/70">{ALLOWED_EXT.join(', ')}</span>
              {' · '}
              <span className="font-bold text-prime/70">
                {labels.maxSize}
              </span>
            </p>
          </>
        )}

        {/* Format badges */}
        {files.length === 0 && !isDragging && (
          <div className="flex gap-2 mt-4" aria-hidden="true">
            {ALLOWED_EXT.map((ext) => (
              <span
                key={ext}
                className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[10px] font-bold text-gray-500 uppercase shadow-sm"
              >
                {ext}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[10px] font-bold text-gray-500 shadow-sm">
              ≤ {MAX_SIZE_MB}MB
            </span>
          </div>
        )}
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div
          role="alert"
          aria-live="polite"
          className="space-y-1.5"
        >
          {errors.map((err, i) => (
            <div
              key={i}
              className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-700 text-xs font-medium px-4 py-2.5 rounded-xl"
            >
              <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-red-500" />
              {err}
            </div>
          ))}
        </div>
      )}

      {/* File Preview List */}
      {files.length > 0 && (
        <ul className="space-y-2" aria-label={isEn ? 'Attached files' : 'Fișiere atașate'}>
          {files.map((file, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm group hover:border-accent/30 transition-all"
            >
              {/* Thumbnail or icon */}
              {file.type.startsWith('image/') ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  aria-label={`Preview of ${file.name}`}
                  loading="lazy"
                  className="w-10 h-10 rounded-lg object-cover border border-gray-100 flex-shrink-0"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <FileIcon type={file.type} />
                </div>
              )}

              <div className="flex-grow min-w-0">
                <p className="text-sm font-semibold text-prime truncate">{file.name}</p>
                <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(i)}
                aria-label={`${labels.remove} ${file.name}`}
                className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 flex-shrink-0"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* GDPR / Privacy Note */}
      <div className="flex items-start gap-2.5 bg-gradient-to-r from-prime/5 to-transparent border border-prime/10 rounded-xl px-4 py-3 mt-1">
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
            <ShieldCheck size={13} className="text-[#8B6914]" />
          </div>
        </div>
        <div>
          <p className="text-[11px] font-bold text-prime/80 uppercase tracking-wider mb-0.5 flex items-center gap-1">
            <Lock size={9} /> GDPR · HIPAA · KVKK
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {labels.gdpr}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalFileUpload;

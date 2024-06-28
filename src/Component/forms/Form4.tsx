import { ErrorMessage, Field } from "formik";
import "./CSS/Form.css";
import uploadImg from "../../Assets/cloud-upload-regular-240.png";
import React, { useRef, useState } from 'react';

const Form4 = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);

  const onFileChange = (files: File[]) => {
    console.log(files);
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    wrapperRef.current?.classList.add('dragover');
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    wrapperRef.current?.classList.remove('dragover');
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    wrapperRef.current?.classList.remove('dragover');

    const newFile = e.dataTransfer.files[0];
    if (newFile) {
      const updatedList = [newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };

  const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (newFile) {
      const updatedList = [newFile];
      setFileList(updatedList);
      onFileChange(updatedList);
    }
  };


  return (
    <div className="d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left overflow-y-scroll">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">COMPANY ID PROOF Info</h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your PAN No., GST No., and RC
      </p>
      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="panno"
        >
          PAN Number
        </label>
        <Field
          type="text"
          placeholder=" e.g. XYZ Pvt Ltd"
          id="panno"
          name="panno"
          className="form-control border border-secondary rounded-3 p-3 w-100"
        />
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="panno" />
        </div>
      </div>

      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="checkUpload"
        >
          Upload Your Company PAN Image
        </label>
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            {fileList.length === 0 ? (
              <>
                <img src={uploadImg} alt="Upload" className="imageUpload" />
                <p>Drag & Drop your files here</p>
              </>
            ) : (
              <img src={URL.createObjectURL(fileList[0])} alt="Uploaded" className="uploaded-image-preview" />
            )}
          </div>
          <input id="panno" name="panno" type="file" onChange={onFileDrop} />
        </div>
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="panno" />
        </div>
      </div>

      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="panno"
        >
          GST Number
        </label>
        <Field
          type="text"
          placeholder=" e.g. XYZ Pvt Ltd"
          id="panno"
          name="panno"
          className="form-control border border-secondary rounded-3 p-3 w-100"
        />
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="panno" />
        </div>
      </div>

      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="checkUpload"
        >
          Upload Your Company GST Image
        </label>
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            {fileList.length === 0 ? (
              <>
                <img src={uploadImg} alt="Upload" className="imageUpload" />
                <p>Drag & Drop your files here</p>
              </>
            ) : (
              <img src={URL.createObjectURL(fileList[0])} alt="Uploaded" className="uploaded-image-preview" />
            )}
          </div>
          <input id="gstimage" name="gstimage" type="file" onChange={onFileDrop} />
        </div>
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="gstimage" />
        </div>
      </div>
      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="checkUpload"
        >
          Upload Your Company RC Image
        </label>
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            {fileList.length === 0 ? (
              <>
                <img src={uploadImg} alt="Upload" className="imageUpload" />
                <p>Drag & Drop your files here</p>
              </>
            ) : (
              <img src={URL.createObjectURL(fileList[0])} alt="Uploaded" className="uploaded-image-preview" />
            )}
          </div>
          <input id="rcimage" name="rcimage" type="file" onChange={onFileDrop} />
        </div>
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="rcimage" />
        </div>
      </div>

    </div>
  );
};

export default Form4;

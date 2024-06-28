import { ErrorMessage, Field, useFormikContext } from "formik";
import { useRef } from "react";
import uploadImg from "../../Assets/cloud-upload-regular-240.png";
import "./CSS/Form.css";

interface Form3Props {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

const Form3: React.FC<Form3Props> = ({ fileList, setFileList }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { setFieldValue } = useFormikContext();

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
      setFieldValue('filelist', updatedList);
      onFileChange(updatedList);
    }
  };

  const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (newFile) {
      const updatedList = [newFile];
      setFileList(updatedList);
      setFieldValue('filelist', updatedList);
      onFileChange(updatedList);
    }
  };

  return (
    <div className="d-flex flex-column gap-2 h-100 w-100 align-items-start font-mono text-left">
      <h2 className="text-primary font-weight-bold fs-3 mb-0">Bank Info</h2>
      <p className="text-secondary mb-2 fs-small">
        Please provide your Account No., Beneficiary Name, and IFSC Code
      </p>
      <div className="d-flex w-100 justify-content-between">
        <div className="col-12 col-lg-6 pe-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="accountno"
          >
            Account Number
          </label>
          <Field
            type="text"
            placeholder=" e.g. XYZ Pvt Ltd"
            id="accountno"
            name="accountno"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="accountno" />
          </div>
        </div>
        <div className="col-12 col-lg-6 pe-2">
          <label
            className="text-primary font-weight-semibold"
            htmlFor="beneficiaryname"
          >
            Beneficiary Name
          </label>
          <Field
            type="text"
            placeholder=" e.g. XYZ Pvt Ltd"
            id="beneficiaryname"
            name="beneficiaryname"
            className="form-control border border-secondary rounded-3 p-3 w-100"
          />
          <div className="text-danger fs-small pt-2">
            <ErrorMessage name="beneficiaryname" />
          </div>
        </div>
      </div>

      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="ifsccode"
        >
          IFSC Code
        </label>
        <Field
          type="text"
          placeholder=" e.g. XYZ Pvt Ltd"
          id="ifsccode"
          name="ifsccode"
          className="form-control border border-secondary rounded-3 p-3 w-100"
        />
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="ifsccode" />
        </div>
      </div>

      <div className="col-12 pe-2">
        <label
          className="text-primary font-weight-semibold"
          htmlFor="checkUpload"
        >
          Upload Your Check
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
          <input id="filelist" name="filelist" type="file" onChange={onFileDrop} />
        </div>
        <div className="text-danger fs-small pt-2">
          <ErrorMessage name="filelist" />
        </div>
      </div>
    </div>
  );
};

export default Form3;

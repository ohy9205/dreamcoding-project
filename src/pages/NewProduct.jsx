import React, { useState } from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/upload";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState({}); //이미지 정보는 포함X
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const onProductChange = (e) => {
    const { name, value, files } = e.target;

    //product의 file값으로는 이미지가 실제 업로드 된 url이 저장돼야함
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setProduct((product) => ({
      ...product,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setIsUploading(true); // 업로드중...

    //제품 사진을 cloudinary에 업로드하고 URL 획득
    uploadImage(file) //
      .then((url) => {
        //url정보 얻으면 firebase에 제품 정보 저장
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("성공적으로 제품이 추가되었습니다⭐");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false)); // 업로드 완료되면 업로딩상태 false

    // 인풋 초기화
    // setProduct(initProduct);
  };

  return (
    <section className="w-full text-center ">
      <h1 className="text-2xl font-bold my-4">새로운 제품 등록</h1>
      {true ? <h3 className="text-xl my-4">🎉등록성공{success}</h3> : ""}
      {file && (
        <img
          className="m-auto h-96 mb-2"
          src={URL.createObjectURL(file)}
          alt={product.name}
        />
      )}
      <form className="flex flex-col px-12" onSubmit={onSubmitHandler}>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={onProductChange}
          required
        />
        <input
          type="text"
          name="name"
          value={product.name || ""}
          onChange={onProductChange}
          placeholder="제품명"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price || ""}
          onChange={onProductChange}
          placeholder="금액"
          required
        />
        <input
          type="text"
          name="category"
          value={product.category || ""}
          onChange={onProductChange}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description || ""}
          onChange={onProductChange}
          placeholder="제품 설명"
          required
        />
        <input
          type="text"
          name="options"
          value={product.options || ""}
          onChange={onProductChange}
          placeholder="사이즈 (콤마(,)로 구분)"
          required
        />
        <Button
          type="submit"
          text={isUploading ? "업로드중..." : "제품 등록하기"}
          disabled={isUploading}></Button>
      </form>
    </section>
  );
}

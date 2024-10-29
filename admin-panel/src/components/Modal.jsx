import { useState } from "react";


import { api } from "../confing/api";




import styles from "../components/Modal.module.css";

function Modal({ setModalOpen }) {
  const [productForm, setProductForm] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const [error, setErorr] = useState("" || 0);
  // console.log(productForm);
const [productData,setProductData]=useState([])
  const { name, price, quantity } = productForm;
  console.log(productData);
  const changeHandler = (event) => {
    // setProductForm(event.target.value)

    setProductForm((productForm) => ({
      ...productForm,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(productForm);
  const createHandler = (event) => {
    event.preventDefault();
    if (!name || !price || !quantity) return setErorr(true);
    else {
         const data = productForm;
          api.post("/products", data)
          .then(res => {

            //  const response=res.data;
            setProductData( res.data)
          })
            setProductForm({
              
              name: "",
              price: 0,
              quantity: 0,
            })
          }
        //  setModalOpen(()=>false);
         
        
          
       
      }
       

// console.log(productData.response);



  return (
    <>
      <div className={styles.container}>
        <form>
          <h3>ایحاد محصول جدید</h3>

          <div className={!error ? styles.name : styles.error}>
            <h5>{!error ? "نام کالا" : "نام کالا نمی تواند خالی باشد*"}</h5>

            <input
              type="text"
              placeholder="نام کالا"
              value={name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className={!error ? styles.name : styles.error}>
            <h5>{!error ? "تعداد موجودی" : "لصفا تعداد کالا را وارد کنید*"}</h5>
            <input
              type="number"
              placeholder="تعداد "
              value={price}
              name="price"
              onChange={changeHandler}
            />
          </div>
          <div className={!error ? styles.name : styles.error}>
            <h5>{!error ? "قیمت" : "لصفا قیمت کالا  را وارد کنید*"}</h5>
            <input
              type="number"
              placeholder="قیمت"
              value={quantity}
              name="quantity"
              onChange={changeHandler}
            />
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.cancel}
              onClick={() => setModalOpen(false)}
            >
              لغو
            </button>
            <button className={styles.create} onClick={createHandler}>
              ایجاد
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;

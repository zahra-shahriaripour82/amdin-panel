
import img from "../images/img.jpg"
import { VscSettings } from "react-icons/vsc";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

import styles from "./ProductList.module.css" 
import Modal from "../components/Modal";
import { useState } from "react";

function ProductList() {
const [modalOpen,setModalOpen]=useState(false);

// const AddProductHandler=()=>{
//   setModalOpen(true)
//   console.log("da");
  
            

// }


  return (
    <div className={styles.container}>
    <div className={styles.searchBox}>
<div className={styles.profile}>
  <div className={styles.prof}> 
    <p>زهرا شهریاری</p>
    <img src={img} alt="" />
  </div> 
    <span>مهندس</span>
</div>
<div className={styles.input}>
     
<input type="text" placeholder= "جستوجو کالا🔍"  />
</div>
    </div>
{/* css of this part is oke */}
    <div className={styles.button}>
        <button onClick={()=>setModalOpen(true)}>افزودن محصول</button>
        {
          modalOpen  && <Modal setModalOpen={setModalOpen}/>
        }
        <h3>مدیریت کالا <span><VscSettings /></span></h3>
    </div>
    {/* <div className={styles.table}> */}
    <table className={styles.table}>
      <thead>
        <tr>
            <th> شناسه کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>نام کالا</th>
        </tr>
        </thead>
        <tbody>
        {/* <tr>
            <td><RiDeleteBinLine/></td>
            <td><BiEdit/></td>
            <td>12sami68</td>
            <td>45000</td>
            <td>230</td>
            <td>تیشرت انگولار</td>
        </tr> */}
         {/* <tr>
            <td><RiDeleteBinLine/></td>
            <td><BiEdit/></td>
            <td>12sami68</td>
            <td>45000</td>
            <td>230</td>
            <td>تیشرت انگولار</td>
        </tr> */}
        {/* <tr>
            <td><RiDeleteBinLine/></td>
            <td><BiEdit/></td>
            <td>12sami68</td>
            <td>45000</td>
            <td>230</td>
            <td>تیشرت انگولار</td>
        </tr>  */}
        {/* <tr>
            <td><RiDeleteBinLine/></td>
            <td><BiEdit/></td>
            <td>12sami68</td>
            <td>45000</td>
            <td>230</td>
            <td>تیشرت انگولار</td>
        </tr>  */}
        </tbody>
    </table>
  
    </div>
    // </div>
  )
}

export default ProductList
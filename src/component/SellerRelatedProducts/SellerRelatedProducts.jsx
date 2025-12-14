import React from "react";
import "../SellerRelatedProducts/SellerRelatedProducts.css";
import item1 from "../../assets/sale-friday.jpg";
import item2 from "../../assets/winter-shirt.jpg";
import item3 from "../../assets/burger-sale.jpg";
import item4 from "../../assets/mobile.jpg";

import { Link } from "react-router-dom";

export default function SellerRelatedProducts() {
  const items = [
    { img: item1, title: "تخفيضات الجمعة السوداء", desc: "عروض مذهلة على المنتجات...", price: "99.99 ر.س" },
    { img: item2, title: "جاكيت شتوي", desc: "جاكيت أنيق بتخفيض خاص...", price: "149.99 ر.س" },
    { img: item3, title: "عرض البرجر", desc: "وجبة برجر شهية بسعر مميز...", price: "29.99 ر.س" },
    { img: item4, title: "هاتف ذكي", desc: "هاتف بتقنية حديثة يدعم أحدث الميزات...", price: "1999.99 ر.س" },
  ];

  return (
    <div className="sellerrelated-section ">
      {/* Put the button first in markup so it's visually left on LTR layouts.
          If your page is RTL and you want the title at the right end, this still works
          because we use justify-content: space-between and align-items:center. */}
      <div className="related-header ">
                <h3 className="related-title mb-0">ذات صلة</h3>
        <Link to="/seller/sellermorerelated" className="related-view-btn ">رؤية المزيد</Link>
      </div>
<div className="related-cards mt-5">
  {items.map((item, idx) => (
    <Link to="/seller/sellerorderdetails" className="related-card" key={idx}>
      <img src={item.img} alt={item.title} />
      <h4>{item.title}</h4>
      <p className="desc">{item.desc}</p>
      <p className="price">{item.price}</p>
    </Link>
  ))}
</div>

    </div>
  );
}
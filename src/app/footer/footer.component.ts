import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  shopDepartment: string = "Shop departments";
  shippingInfo: string = "Account & shipping info";
  aboutUs: string = "About us";

  public shopDepartments = [
    { id: "1",name: "Sneakers & Athletic"},
    { id: "2",name: "Athletic Apparelc"},
    { id: "3",name: "Sandals"},
    { id: "4",name: "Jeans"},
    { id: "5",name: "Shirts & Tops"},
    { id: "6",name: "Shorts"},
    { id: "7",name: "T-Shirts"},
    { id: "8",name: "Swimwear"},
    { id: "9",name: "Clogs & Mules"},
    { id: "10",name: "Bags & Wallets"},
    { id: "11",name: "Accessories"},
    { id: "12",name: "Sunglasses & Eyewear"},
    { id: "13",name: "Watches"},
  ];

  public shippingTabs = [
    { id: "1",name: "Your account"},
    { id: "2",name: "Shipping rates & policies"},
    { id: "3",name: "Refunds & replacements"},
    { id: "4",name: "Order tracking"},
    { id: "5",name: "Delivery info"},
    { id: "6",name: "Taxes & fees"},
  ];

  public aboutKart = [
    { id: "1", name: "About company"},
    { id: "2", name: "Our team"},
    { id: "3", name: "Careers"},
    { id: "4", name: "News"},
  ];

  public footerLabels = [
    { name: "Fast and free delivery", content: "Free delivery for all orders over INR 200", className: "bi bi-cart-check-fill text-primary"},
    { name: "Money back guarantee", content: "We return money within 30 days", className: "bi bi-currency-exchange text-primary"},
    { name: "24/7 customer support", content: "Friendly 24/7 customer support", className: "bi bi-headset text-primary"},
    { name: "Secure online payment", content: "We possess SSL / Secure сertificate", className: "bi bi-key-fill text-primary"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

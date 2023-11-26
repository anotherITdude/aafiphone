import React from 'react'
import Section from './Section'

const Terms = () => {
  return (
    <div className="text-webWhite" style={{ background: "#3F4040", height: "auto" }}>
      <Section>
        <div className="w-[90%] pl-20 " style={{ margin: "auto", marginTop:"5%" }}>
          <h1 className="font-DIN-Bold text-3xl mb-4">Terms and Conditions</h1>
          <ul className="list-decimal  font-DIN-DemiBold mt-4">
            <li>
              1. The competition is open only to UAE residents above 18 years of
              age with a valid Emirates ID.
            </li>
            <li>
              2. To enter the promotion, participants have to purchase Al Ain
              Farms Fresh Chicken, Fresh Milk, Long Life Milk, Fruit Mix, Fresh
              Eggs, or Fresh Yoghurt that have promotional QR code on them.
            </li>
            <li>
              3. On the landing page, participants have to enter their name,
              email, mobile number, Emirate, Emirates ID number and upload a
              clear photo of the purchase receipt which shows the date and the
              Al Ain Farms product.
            </li>
            <li>
              4. Participants have to register only through the online link
              which is validated through scanning of the QR code on the product.
            </li>
            <li>
              5. The last date for submission is _____2023. Winners will be
              announced on _____2023 on the Al Ain Farms Social Media and
              individually contacted for prize collection.
            </li>
            <li>
              {" "}
              6. Selection of winners will be at the sole discretion of Al Ain
              Farms management and all decisions will be final and binding
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

export default Terms

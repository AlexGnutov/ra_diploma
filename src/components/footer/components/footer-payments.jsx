import React from 'react';

function FooterPayments() {
  return (
    <section>
      <h5>Принимаем к оплате:</h5>
      <div className="footer-pay">
        <div className="footer-pay-systems footer-pay-systems-paypal" />
        <div className="footer-pay-systems footer-pay-systems-master-card" />
        <div className="footer-pay-systems footer-pay-systems-visa" />
        <div className="footer-pay-systems footer-pay-systems-yandex" />
        <div className="footer-pay-systems footer-pay-systems-webmoney" />
        <div className="footer-pay-systems footer-pay-systems-qiwi" />
      </div>
    </section>
  );
}

export default FooterPayments;

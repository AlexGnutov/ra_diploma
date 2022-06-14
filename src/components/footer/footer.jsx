import React from 'react';
import FooterInformation from './components/footer-information';
import FooterPayments from './components/footer-payments';
import FooterCopyright from './components/footer-copyright';
import FooterContacts from './components/footer-contacts';

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <FooterInformation />
        </div>
        <div className="col">
          <FooterPayments />
          <FooterCopyright />
        </div>
        <div className="col text-right">
          <FooterContacts />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

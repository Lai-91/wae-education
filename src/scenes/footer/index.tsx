import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Our company is committed to bridging the gap between talent and opportunity. We understand the
            transformative power of education and career development, and we stand at the forefront of facilitating
            both.
          </p>
          <p>© WAE Education All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Block B 2-602, Leisure Commerce Square, 9, Jln PJS 8/9, Bandar Sunway, 46150 Petaling Jaya,
            Selangor,Malaysia.
          </p>
          <p>
            <a href="mailto:alex@waeeducation.online">alex@waeeducation.online</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

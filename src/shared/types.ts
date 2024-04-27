export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  OurServices = "ourservices",
  ContactUs = "contactus",
}

export interface CardWithIcon {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
  image: string;
}

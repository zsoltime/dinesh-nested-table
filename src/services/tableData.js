const tableData = [
  {
    name: {
      firstName: "John",
      lastName: "Jacobs"
    },
    companyName: "Hudson,Rohan and Shana"
  },
  {
    name: "Candace Jast",
    companyName: "Schuppe.Jerde and Mann"
  },
  {
    name: "Acandace Jast",
    companyName: "Shana,Rohan and Hudson"
  },
  {
    name: "Bcandace Jast",
    companyName: "Jerde.Schuppe and Mann"
  },
  {
    name: "Ecandace Jast",
    companyName: "Mann.Jerde and Schuppe"
  },
  {
    name: "Dcandace Jast",
    companyName: "Schuppe.Hudson and Mann"
  },
  {
    name: "Gcandace Jast",
    companyName: "Hudson.Jerde and Mann"
  },
  {
    name: "Hcandace Jast",
    companyName: "Schuppe.Jerde and Hudson"
  },
  {
    name: "Icandace Jast",
    companyName: "Schuppe.Jerde.Hudson and Mann"
  }
];

const headersConfig = {
  name: "FullName",
  companyName: "Company Name"
};

export function getData() {
  return tableData;
}
export function getHeader() {
  return headersConfig;
}

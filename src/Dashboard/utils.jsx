import { LockOutlined } from "@ant-design/icons";
import { Checkbox, Col, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getAllCategory } from "../dbconfig";



export const fetchCategories = async () => {
  const res = await getAllCategory();
  const newArr = res.map((e) => {
    return {
      value: e.categoryName,
      label: e.categoryName,
    };
  });

  return newArr
}


const colPropsThree = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
}
const colPropsFour = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 6,
}
export const formItems = [
  {
    label: "Project Name",
    name: "title",
    rules: [
      {
        required: true,
        message: "Project Name is required",
      },
      {
        whitespace: true,
      },
    ],
    hasFeedback: true,
    component: (
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder="Project Name"
      />
    ),
    colProps: colPropsThree
  },
  {
    label: "Short Location",
    name: "subTitle",
    rules:
      [
        {
          required: true,
          message: "Short Location is required"
        },
        {
          whitespace: true
        }
      ],
    hasFeedback: true,
    colProps: colPropsThree,
    component: (
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder="Short Location"
      />
    ),

  },
  {
    label: "Category",
    name: "category",
    rules: [
      {
        required: true,
        message: "Category is required",
      },
      {
        whitespace: true,
      },
    ],
    hasFeedback: true,
    component: (
      <Select
        style={{ width: "100%" }}
        defaultValue="Select Category"
        options={await fetchCategories()}
      ></Select>
    ),
    colProps: colPropsThree
  },
  {
    label: "Details",
    name: "details",
    rules: [
      {
        required: true,
        message: "Details is required",
      },
      {
        whitespace: true,
      },
    ],
    hasFeedback: true,
    component: (
      <TextArea
        rows={12}
        placeholder="maxLength is 150"
        maxLength={1000}
        style={{ height: "150px" }}
      />
    ),
    colProps: {
      ...colPropsThree,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24,
    },
  },
  {
    label: "Total Flat",
    name: "totalFlat",
    rules: [
      {
        required: true,
        message: "Total Flat is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Total Flat" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Flat Available",
    name: "flatAvailable",
    rules: [
      {
        required: true,
        message: "Flat Available is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Flat Available " type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Total Office",
    name: "totalOffice",
    rules: [
      {
        required: true,
        message: "Total Office is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Total Office" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Office Available",
    name: "officeAvailable",
    rules: [
      {
        required: true,
        message: "Office Available is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Office Available" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Total Shop",
    name: "totalShop",
    rules: [
      {
        required: true,
        message: "Total Shop Available is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Total Shop" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Shop Available",
    name: "shopAvailable",
    rules: [
      {
        required: true,
        message: "Shop Available is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Shop Available" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Location",
    name: "location",
    rules: [
      {
        required: true,
        message: "Location is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Location" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Address",
    name: "address",
    rules: [
      {
        required: true,
        message: "Address is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Address" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Project Type",
    name: "projectType",
    rules: [
      {
        required: true,
        message: "Project Type is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Project Type" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Number of Building Blocks",
    name: "numberofBuildingBlocks",
    rules: [
      {
        required: true,
        message: "Number of Building Blocks Type is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Number of Building Blocks" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Land Area (Katha)",
    name: "landArea",
    rules: [
      {
        required: true,
        message: "LandArea is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="LandArea" type="number" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Flat Size",
    name: "flatSize",
    rules: [
      {
        required: true,
        message: "Flat Size is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Flat Size" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Number of Floor",
    name: "numberofFloor",
    rules: [
      {
        required: true,
        message: "Number of Floor is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Number of Floor" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Launch Date",
    name: "launchDate",
    rules: [
      {
        required: true,
        message: "Launch Date is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Launch Date" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Rajuk Aproval Date",
    name: "rajukpprovalDate",
    rules: [
      {
        required: true,
        message: "Rajuk Aproval Date is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Rajuk Aproval Date" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Rajuk Aproval No",
    name: "rajukApprovalNo",
    rules: [
      {
        required: true,
        message: "Rajuk Aproval No is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Rajuk Aproval No" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Status",
    name: "status",
    rules: [
      {
        required: true,
        message: "Status is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Status" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Estimated Completion Date",
    name: "estimatedCompletionDate",
    rules: [
      {
        required: true,
        message: "Estimated Completion Date required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Estimated Completion Date" />
    ),
    colProps: colPropsFour
  },
  {
    label: "Slug",
    name: "slug",
    rules: [
      {
        required: true,
        message: "Slug is required"
      },
      {
        whitespace: true
      }
    ],
    hasFeedback: true,
    component: (
      <Input placeholder="Slug" />
    ),
    colProps: colPropsFour
  }




];



export const defaultForm = {
  title: "",
  subTitle: "",
  details: "",
  location: "",
  address: "",
  projectType: "",
  landArea: "",
  numberofBuildingBlocks: "",
  flatSize: "",
  numberofFloor: "",
  launchDate: "",
  estimatedCompletionDate: "",
  rajukpprovalDate: "",
  rajukApprovalNo: "",
  status: "",
  category: "",
};

export const defaultCategory = {
  categoryName: "",
  categoryType: "",
  categoryDetails: "",
};


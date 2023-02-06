import { Space, Tag } from "antd";

export const columns = [
  {
    title: "Project Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>View</a>
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
export const data = [
  {
    key: "1",
    name: "Project Name",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export const showModal = () => {
  setIsModalOpen(true);
};
export const handleOk = async () => {
  await updateHomeAbout(aboutForm);
  setIsModalOpen(false);
};
export const handleCancel = () => {
  setIsModalOpen(false);
};

export const submitAboutForm = async (e) => {
  //   e.preventDefault();
  //   setBtnLoader(true);
  //   try {
  //     await createDocumentsForHomeAbout(aboutForm);
  //     setAboutForm(defaultForm);
  //     setBtnLoader(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setBtnLoader(false);
  //   }
};

export const handleChage = (e) => {
  // setAboutForm({
  //   ...aboutForm,
  //   [e.target.name]: e.target.value,
  // });
};

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

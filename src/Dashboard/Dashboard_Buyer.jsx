import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";

import { getAllAfterSale, getAllBuyer } from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import { Avatar, Button, Divider, Drawer, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, Outlet } from "react-router-dom";
const Dashboard_Buyer = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    let res = await getAllBuyer();
    try {
      if (res) {
        setData(res);
        setLoading(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dashboard_Heading heading="Buyers" subheading="All Buyers" />
      <div className="after-sale-content">
        <div className="grid">
          <div className="col-6">
            <div
              id="scrollableDiv"
              style={{
                height: 500,
                overflow: "auto",
                padding: "0 12px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
                color: "black",
              }}
            >
              <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 1}
                loader={
                  <Skeleton
                    avatar
                    paragraph={{
                      rows: 3,
                    }}
                    active
                  />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
              >
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={""} />}
                        title={<span>{item.name}</span>}
                        description={item.email}
                      />
                      <Link to={`dashboard-buyer/${item.id}`}>
                        {" "}
                        <Button
                          type="primary"
                          shape="round"
                          icon={<DownloadOutlined />}
                          size={14}
                          onClick={showDrawer}
                        >
                          See message
                        </Button>
                      </Link>
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </div>
          </div>
          <div className="col-6">Progress board</div>

          <Drawer
            width={640}
            placement="right"
            closable={false}
            onClose={onClose}
            open={open}
          >
            <Outlet />
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Buyer;

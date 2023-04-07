import { Skeleton } from "primereact/skeleton";
import React from "react";
import { useState } from "react";

const OnPageLoaderTwo = ({ number }) => {
  return (
    <div
      className="on-page-loader-two"
      style={{ display: "flex", justifyContent: "center", width: "98%" }}
    >
      {number == 4 ? (
        <>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </>
      ) : number == 3 ? (
        <>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </>
      ) : number == 2 ? (
        <>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
          <div className="border-round border-1 surface-border p-4 surface-card">
            <div className="flex mb-3">
              <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
              <div>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
              </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
            <div className="flex justify-content-between mt-3">
              <Skeleton width="4rem" height="2rem"></Skeleton>
              <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
          </div>
        </>
      ) : (
        <div className="border-round border-1 surface-border p-4 surface-card w-full">
          <div className="flex mb-3">
            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
            <div>
              <Skeleton width="10rem" className="mb-2"></Skeleton>
              <Skeleton width="5rem" className="mb-2"></Skeleton>
              <Skeleton height=".5rem"></Skeleton>
              <Skeleton width="10rem" className="mb-2"></Skeleton>
              <Skeleton width="5rem" className="mb-2"></Skeleton>
            </div>
          </div>
          <Skeleton width="100%" height="150px"></Skeleton>
          <div className="flex justify-content-between mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton width="4rem" height="2rem"></Skeleton>
          </div>
          <div className="flex justify-content-between mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton width="4rem" height="2rem"></Skeleton>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnPageLoaderTwo;

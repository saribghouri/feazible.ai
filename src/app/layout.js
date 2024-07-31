"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () => {
    
      setTimeout(() => {
        setLoading(false); 
      }, 2000);
    };
  
    fetchData();
  }, []); 
  return (
    <html lang="en">
        <body className='over-all-body'>
        {loading ? (
          <Spin
          className="flex justify-center w-[100%] h-[750px] items-center"
          indicator={<LoadingOutlined style={{ fontSize: 45, color: "#02ffd1" }} spin />}
        />
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}

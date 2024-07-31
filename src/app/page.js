"use client";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import Image from "next/image";
import { Modal, Input, Select, Form } from "antd";
import Typewriter from 'typewriter-effect'; 

const { TextArea } = Input;
const { Option } = Select;
import { Card, Col, Row } from "antd";
import { useState, useRef } from "react";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const benefitsRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProcess = () => {
    processRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTeam = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <div className="bgk">

   
      <div className="flex flex-col md:flex-row justify-between w-full items-center pl-[15px] pr-[15px]">
        <img
          className="mb-4 md:mb-0"
          src="/images/SCTmRx-removebg-preview (1).png"
          alt=""
        />
        <div className="flex md:flex-row gap-[20px] mb-4 md:mb-0">
          <Button
            className="border-none !bg-transparent !text-black"
            onClick={scrollToBenefits}
          >
            Benefits of AI
          </Button>
          <Button className="border-none !bg-transparent !text-black"   onClick={scrollToServices}>Services</Button>
          <Button className="border-none !bg-transparent !text-black"onClick={scrollToProcess}>Process</Button>
          <Button className="border-none !bg-transparent !text-black" onClick={scrollToTeam}>Team</Button>
        </div>
        <div>
          <Button className="p-[25px] !bg-[#0c0c0c] !text-white text-[18px] rounded-[10px]">
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-full Benefits of AI" >
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[50%] ml-0 md:ml-[-150px] p-4">
          <h1 className="text-[50px] sm:text-[60px] md:text-[70px] font-bold hello">
            We Build AI Automations  <Typewriter 
  onInit={(typewriter) => { 
    const typeAndDelete = () => {
      typewriter
        .typeString('Social Media')
        .callFunction(() => {
          console.log('First string typed out!');
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log('First string deleted');
        })
        .typeString('Lead Generation')
        .callFunction(() => {
          console.log('Second string typed out!');
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log('Second string deleted');
        })
        .typeString('Sales Funnels')
        .callFunction(() => {
          console.log('Third string typed out!');
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log('Third string deleted');
        })
        .callFunction(() => {
          // Restart the typing effect
          typeAndDelete();
        })
        .start();
    };

    typeAndDelete();
  }} 
/>


          </h1>
          <div>
            <div className="flex gap-[10px] items-center">
              <img
                className="hidden md:block w-[170px] h-[80px] border bg-[#ffffff] rounded-[10px]"
                src="/images/AbAalH.png"
                alt=""
              />
              <img
                className="hidden md:block w-[80px] h-[80px] border bg-[#ffffff] rounded-[10px]"
                src="/images/wkwwER.png"
                alt=""
              />
              <p className="text-sm sm:text-base md:text-lg">
                Embrace AI to revolutionize your customer support, supercharge
                your lead generation, and automate your workflows. Book a call
                to discuss a tailor-made strategy that works for you.
              </p>
            </div>
            <Button
              className="text-[16px] sm:text-[18px] !bg-[#000] !text-white p-[15px] sm:p-[20px] md:p-[25px] mt-[10px] sm:mt-[15px] md:mt-[20px] rounded-[10px]"
              onClick={showModal}
            >
              Lets talk <PhoneOutlined className="ml-[10px]" />
            </Button>
            <Modal
              title="Let's Talk"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary">
                  Submit
                </Button>,
              ]}
            >
              <Form layout="vertical">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your name!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Please input your email!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone number!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Text Field"
                  name="textField"
                  rules={[{ required: true, message: "Please input some text!" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Dropdown"
                  name="dropdown"
                  rules={[{ required: true, message: "Please select an option!" }]}
                >
                  <Select>
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Text Area"
                  name="textArea"
                  rules={[{ required: true, message: "Please input some text!" }]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 px-4 Benefits of AI" ref={benefitsRef}>
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl font-bold text-center mb-4">
            Benefits Of AI For Businesses
          </h1>
          <p className="text-center mb-12">
            Benefits Of AI Integration for your business
          </p>
          <Row gutter={[16, 20]} className="flex flex-wrap justify-center">
            <Col xs={24} sm={12} md={6}>
              <Card
                title={
                  <div className="text-base font-bold">
                    Competitive Advantage
                  </div>
                }
                bordered={false}
                headStyle={{ borderBottom: "none" }}
                className="card-content"
              >
                All integrations allow businesses to stay ahead of the
                competition by leveraging advanced technologies to innovate and
                improve their products and services.
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                title={
                  <div className="text-base font-bold">Intuitive Accuracy</div>
                }
                bordered={false}
                headStyle={{ borderBottom: "none" }}
                className="card-content"
              >
                AI systems enhance decision-making processes with precise and
                data-driven insights, minimizing errors and maximizing
                performance.
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                title={<div className="text-base font-bold">Cost Savings</div>}
                bordered={false}
                headStyle={{ borderBottom: "none" }}
                className="card-content"
              >
                By automating routine tasks, AI reduces routine costs, freeing
                up resources to invest in growth and innovation.
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                title={
                  <div className="text-base font-bold">Improved Efficiency</div>
                }
                bordered={false}
                headStyle={{ borderBottom: "none" }}
                className="card-content"
              >
                AI workflows optimize processes, resulting in faster turnaround
                times and increased productivity across all business operations.
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className="flex w-[100%] flex-col justify-center items-center mt-20 px-4 Our Services" ref={servicesRef}>
        <div className="flex flex-col w-full max-w-6xl text-center">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="mb-10">Benefits Of AI Integration for your business</p>
          <div className="flex flex-col gap-[40px] w-full">
            <Row gutter={[18, 24]} className="w-full flex">
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  title={
                    <div className=" text-start text-[24px] mt-[20px] font-bold">
                      Competitive Advantage
                    </div>
                  }
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-content mb-12"
                >
                  <div className="card-body">
                    <ul className="text-start ml-[20px] list-disc">
                      <li>customer support</li>
                      <li>lead generation</li>
                     

                      <li>lead qualification</li>
                      <li>product recommendation</li>
                      <li>voice bots</li>
                      <li>custom solutions</li>
                    </ul>
                  </div>
                  <div className="card-footer mt-[70px]">
                    <Button
                      className="w-full !bg-black !text-white p-2"
                      type="primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  title={
                    <div className="text-start text-[24px] mt-[20px] font-bold">
                      Intuitive Accuracy
                    </div>
                  }
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-content mb-12"
                >
                  <div className="card-body">
                    <ul className="text-start ml-[20px] list-disc">
                      <li>social media automation</li>
                      <li>CRM management</li>
                      <li>lead qualification</li>
                      <li>onboarding process</li>
                      <li>web scraping systems</li>
                      <li>natural language to SQL</li>
                      <li>custom solutions</li>
                    </ul>
                  </div>
                  <div className="card-footer mt-[50px]">
                    <Button
                      className="w-full !bg-black !text-white p-2"
                      type="primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  title={
                    <div className="text-start text-[24px] mt-[20px] font-bold">
                      Improved Efficiency
                    </div>
                  }
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-content mb-12"
                >
                  <div className="card-body">
                    <ul className="text-start ml-[20px] list-disc">
                      <li>Strategic Planning</li>
                      <li>Feasibility Evaluations</li>
                      <li>Identifying Use Cases</li>
                      <li>Coaching for AI Agency Owners</li>
                    </ul>
                  </div>
                  <div className="card-footer mt-[115px]">
                    <Button
                      className="w-full !bg-black !text-white p-2"
                      type="primary"
                    >
                      Learn More
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-40 px-4 Process" ref={processRef}>
        <div className="flex flex-col w-full max-w-6xl">
          <h1 className="text-3xl font-bold mb-4">
            Our Process
          </h1>
          <p className="mb-10">Benefits Of AI Integration for your business</p>
          <div className="w-[12%]">
            <Button className="p-[25px] text-[18px] !bg-[#000] !text-white">
              Book a call
            </Button>
          </div>
          <div className="flex flex-col w-full mt-[30px]">
            <Row gutter={[18, 22]} className="w-full">
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-contents card-width-30 p-0 !border-none flex flex-col justify-between"
                >
                  <div className="p-[10px] w-[16%] bg-[#7e7b7b] crds rounded-[10px] text-[20px] mb-[20px] font-bold text-center">
                    1
                  </div>
                  <div className="text-[22px] font-bold mb-[20px]">
                    Intro Call
                  </div>
                  <div className="card-body text-left text-[18px]">
                    Schedule a call to explore our compatibility and discuss how
                    our services can enhance your business. We aim to learn
                    about your current operations and identify ways to add
                    value.
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-contents card-width-30 p-0 flex flex-col justify-between"
                >
                  <div className="p-[10px] w-[16%] bg-[#7e7b7b] crds rounded-[10px] mb-[20px] text-[20px] font-bold text-center">
                    2
                  </div>
                  <div className="text-[22px] font-bold mb-[20px]">
                    Strategy
                  </div>
                  <div className="card-body text-left text-[18px]">
  After understanding your needs, we&apos;ll set up a follow-up
  call to present our proposal. This will cover the expected
  deliverables, implementation strategy, timelines and pricing
  details.
</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8}>
                <Card
                  bordered={false}
                  headStyle={{ borderBottom: "none" }}
                  className="card-contents card-width-30 p-0 flex flex-col justify-between"
                >
                  <div className="p-[10px] w-[16%] bg-[#7e7b7b] crds rounded-[10px] mb-[20px] text-[20px] font-bold text-center">
                    3
                  </div>
                  <div className="text-[22px] font-bold mb-[20px]">
                    Implementation
                  </div>
                  <div className="card-body text-left text-[18px]">
                    After receiving your go-ahead, our team will start the
                    process, ensuring you&apos;re updated throughout and maintaining
                    close collaboration via our Slack channel.
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-40 px-4 Team" ref={teamRef}>
        <div className="flex flex-col w-full max-w-6xl text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h1>
          <p className="mb-6 md:mb-10">
            Your Partners in AI-Driven Transformation
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-[50px] mt-[30px]">
            <div className="w-full md:w-[35%] flex flex-col justify-center items-center">
              <div className="w-[70%] md:w-full flex justify-center">
                <img
                  className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] pt-[40px] border bg-[#8cfce7] rounded-[10px]"
                  src="/images/wkwwER.png"
                  alt="Yarema"
                />
              </div>
              <div className="flex justify-center items-center w-full flex-col mt-4">
                <h1 className="text-[16px] md:text-[20px] font-semibold mt-[20px] mb-[20px]">
                  Yarema
                </h1>
                <p className="text-sm md:text-base px-4">
                  Bohdan is a seasoned entrepreneur with a decade of expertise
                  in the IT sector. Discover more about Bohdan on his YouTube
                  channel: youtube.com/@bo-sar
                </p>
                <h1 className="font-bold text-[16px] md:text-[20px] mt-2">
                  in
                </h1>
              </div>
            </div>

            <div className="w-full md:w-[35%] flex flex-col justify-center items-center mt-6 md:mt-0">
              <div className="w-[70%] md:w-full flex justify-center">
                <img
                  className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] border bg-[#8cfce7] rounded-[10px]"
                  src="/images/AbAalH.png"
                  alt="Titus"
                />
              </div>
              <div className="flex justify-center items-center w-full flex-col mt-4">
                <h1 className="text-[16px] md:text-[20px] font-semibold mt-[20px] mb-[20px]">
                  Titus
                </h1>
                <p className="text-sm md:text-base px-4">
                  Bohdan is a seasoned entrepreneur with a decade of expertise
                  in the IT sector. Discover more about Bohdan on his YouTube
                  channel: youtube.com/@bo-sar
                </p>
                <h1 className="font-bold text-[16px] md:text-[20px] mt-2">
                  in
                </h1>
              </div>
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-center items-center mt-6 md:mt-0">
              <div className="w-[70%] md:w-full flex justify-center">
                <img
                  className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] border bg-[#8cfce7] rounded-[10px]"
                  src="/images/YxzjNs.png"
                  alt="Titus"
                />
              </div>
              <div className="flex justify-center items-center w-full flex-col mt-4">
                <h1 className="text-[16px] md:text-[20px] font-semibold mt-[20px] mb-[20px]">
                  Titus
                </h1>
                <p className="text-sm md:text-base px-4">
                  Bohdan is a seasoned entrepreneur with a decade of expertise
                  in the IT sector. Discover more about Bohdan on his YouTube
                  channel: youtube.com/@bo-sar
                </p>
                <h1 className="font-bold text-[16px] md:text-[20px] mt-2">
                  in
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="flex flex-col justify-center items-center mt-40 px-4">
          <div className="flex flex-col w-full max-w-6xl text-center">
            <div className="flex justify-center flex-col items-center w-full gap-[18px] rounded-[20px] p-[30px] bg-[#96f8e6] mt-[30px]">
              <h1 className="text-[60px] font-extrabold">Got Questions?</h1>
              <p className="text-[18px]">
                Schedule your consultation with Bosar AI today.
              </p>
              <Button className="text-[24px] sm:text-[24px] !bg-[#000] !text-white p-[20px] sm:p-[25px] md:p-[30px] mt-[10px] sm:mt-[15px] md:mt-[20px] rounded-[10px]">
                Contact Us
                <PhoneOutlined className="ml-[10px] text-[24px]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-40 px-4 ">
          <div className="flex  justify-between w-full max-w-6xl flex-col text-center items-center">
            <div className="flex justify-between items-center w-[100%]">
              <div>
                <img
                  className="mb-4 md:mb-0"
                  src="/images/SCTmRx-removebg-preview (1).png"
                  alt=""
                />
              </div>
              <div className="text-start">
                <h1 className="text-[20px] font-semibold">Contact Us</h1>
                <p>
                  <MailOutlined className="mr-[10px]" />
                  titas@feazible.ai
                </p>
              </div>
            </div>
            <Divider className="bg-black" />
            <h1>
              © All rights reserved.{" "}
              <span className="font-bold">Feazible AI</span>
            </h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );

}

import React, { useContext } from "react";
import { Form, Select, Card,Input, Tooltip, Button } from "antd";
import { AiOutlineSelect, AiFillPlayCircle } from "react-icons/ai";
import {
  InfoCircleOutlined,
  CreditCardFilled,
  MessageOutlined,
  GiftOutlined,
} from "@ant-design/icons";

import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";
// import { Loader } from ".";

const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const FormItem = Form.Item;
  const Option = Select.Option;

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onCheck = async () => {
    // try {
    //   const values = await form.validateFields();
    //   console.log('Success:', values);
    // } catch (errorInfo) {
    //   console.log('Failed:', errorInfo);
    // }
  };

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="app2">
       <Card title="Card Info" 
       extra={!currentAccount && ( <Button
            style={{
              paddingLeft:20,
              paddingRight:20,
              borderRadius: 45,
              borderWidth: 0,
            }}
            shape="circle"
            icon={<AiOutlineSelect className="text-white mr-2" />}
            type="primary"
            
            onClick={connectWallet}
          >
            connect wallet
            
          </Button>)} style={{ width: '30%',marginTop:50 }}>
      <Form
        layout="vertical"
        validateMessages={validateMessages}
        style={{
         
          borderWidth: 2,
          borderColor: "red",
          alignSelf: "center",
          justifyContent: "center",
        }}
        labelCol={{
          span: 8,
        }}
      >
        <FormItem
          label={<label style={{ color: "white" }}>Address</label>}
          rules={[
            {
              required: true,
              message: "card number is required",
            },
          ]}
        >
          <Input
            style={{
              color: "#366baf",
              WebkitTextFillColor: "red",
              borderRadius: 5,
              width: "100%",
            }}
            onChange={handleChange}
            prefix={<CreditCardFilled className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Take the address account from MetaMask">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            placeholder="Type Address to "
          />
        </FormItem>
        <FormItem
          label={<label style={{ color: "white" }}>Amount</label>}
          rules={[
            {
              required: true,
              message: "Amount is required",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{
              bordered: true,
              borderRadius: 5,
              color: "#366baf",
              width: "100%",
            }}
            prefix={<MessageOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Type Amount value in ETH Currency">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            placeholder="Type Amount (ETH)"
          />
        </FormItem>
        <FormItem
          label={<label style={{ color: "white" }}>Keyword</label>}
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 8 }}
          rules={[
            {
              required: true,
              message: "Keyword is required",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{
              bordered: true,
              borderRadius: 5,
              color: "#366baf",
              width: "100%",
            }}
            prefix={<GiftOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Type a keyword">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            placeholder="Type keyword"
          />
        </FormItem>
        <FormItem
          label={<label style={{ color: "white" }}>Message</label>}
          rules={[
            {
              required: true,
              message: "Message is required",
            },
          ]}
        >
          <Input
            onChange={handleChange}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{
              bordered: true,
              borderRadius: 5,
              color: "#366baf",
              width: "100%",
            }}
            prefix={<GiftOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Send a message">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            placeholder="Type Message"
          />
        </FormItem>
        <Form.Item>
          <Button
            style={{
              width: "100%",
              marginTop: 20,
              background: "#319146",
              borderRadius: 5,
              borderWidth: 0,
            }}
            type="primary"
            onClick={handleSubmit}
          >
            Check
          </Button>
        </Form.Item>
      </Form>
      </Card>
    </div>
  );
};

export default Welcome;

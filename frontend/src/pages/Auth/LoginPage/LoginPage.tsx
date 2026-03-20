import { useState } from "react";
import { Form, Input, Button, Checkbox, Divider, Alert, message } from "antd";
import {
    MailOutlined,
    LockOutlined,
    EyeTwoTone,
    EyeInvisibleOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { GoogleSVG } from "../../../components/icons/GoogleSVG";
import { LogoSVG } from "../../../components/icons/LogoSVG";
import authApi from "../../../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { setUserInfo } from "../../../redux/userSlice";

interface LoginFormValues {
    email: string;
    password: string;
}

export default function LoginPage() {
    const [form] = Form.useForm<LoginFormValues>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onFinish = async (values: LoginFormValues) => {
        setLoading(true);
        setError(null);
        try {
            const res = await authApi.login(values);
            store.dispatch(setUserInfo(res.data));
            message.success("Well come back !");
        } catch (err: any) {
            message.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f4f0] flex items-center justify-center p-6 overflow-hidden">
            <div className="fixed -top-32 -right-32 w-96 h-96 rounded-full bg-[#c8f0dc] opacity-40 pointer-events-none" />
            <div className="fixed -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#fde8d0] opacity-40 pointer-events-none" />
            <div className="fixed top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#dde8f8] opacity-30 pointer-events-none" />

            <div className="w-full max-w-[420px] relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1a1a2e] rounded-2xl mb-4 shadow-lg">
                        <LogoSVG />
                    </div>
                    <h1 className="text-2xl font-serif text-[#1a1a2e] tracking-tight">
                        SurveyHub
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Nền tảng khảo sát thông minh
                    </p>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-9 py-8">
                    <h2 className="text-xl font-semibold text-[#1a1a2e]">
                        Đăng nhập
                    </h2>
                    <p className="text-sm text-gray-400 mt-1 mb-6">
                        Chào mừng bạn trở lại!
                    </p>

                    <div className="flex flex-col gap-2.5">
                        <button
                            onClick={() => {}}
                            className="flex items-center justify-center gap-2.5 h-11 w-full border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                        >
                            <GoogleSVG />
                            Tiếp tục với Google
                        </button>
                        <button
                            onClick={() => {}}
                            className="flex items-center justify-center gap-2.5 h-11 w-full border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                        >
                            <GithubOutlined className="text-base" />
                            Tiếp tục với GitHub
                        </button>
                    </div>

                    <Divider className="!my-5">
                        <span className="text-xs text-gray-300">
                            hoặc đăng nhập bằng email
                        </span>
                    </Divider>

                    {error && (
                        <Alert
                            message={error}
                            type="error"
                            showIcon
                            closable
                            onClose={() => setError(null)}
                            className="mb-5 !rounded-xl !text-sm"
                        />
                    )}

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                        size="large"
                    >
                        <Form.Item
                            name="email"
                            label={
                                <span className="text-[13px] font-medium text-gray-700">
                                    Email
                                </span>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập email",
                                },
                                {
                                    type: "email",
                                    message: "Email không hợp lệ",
                                },
                            ]}
                            className="!mb-4"
                        >
                            <Input
                                prefix={
                                    <MailOutlined className="text-gray-400" />
                                }
                                placeholder="ban@example.com"
                                autoComplete="email"
                                className="!rounded-xl !h-11"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label={
                                <span className="text-[13px] font-medium text-gray-700">
                                    Mật khẩu
                                </span>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập mật khẩu",
                                },
                                {
                                    min: 6,
                                    message: "Mật khẩu tối thiểu 6 ký tự",
                                },
                            ]}
                            className="!mb-4"
                        >
                            <Input.Password
                                prefix={
                                    <LockOutlined className="text-gray-400" />
                                }
                                placeholder="••••••••"
                                autoComplete="current-password"
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone twoToneColor="#4ecca3" />
                                    ) : (
                                        <EyeInvisibleOutlined className="text-gray-400" />
                                    )
                                }
                                className="!rounded-xl !h-11"
                            />
                        </Form.Item>

                        <div className="flex items-center justify-between mb-5 mt-1">
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="!mb-0"
                            >
                                <Checkbox>
                                    <span className="text-[13px] text-gray-500">
                                        Ghi nhớ đăng nhập
                                    </span>
                                </Checkbox>
                            </Form.Item>
                            <Link
                                href="/forgot-password"
                                className="text-[13px] font-medium text-[#4ecca3] hover:underline"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>

                        <Form.Item className="!mb-0">
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                                className="!h-11 !rounded-xl !bg-[#1a1a2e] !border-[#1a1a2e] !text-[15px] !font-semibold hover:!bg-[#2d2d4e] hover:!border-[#2d2d4e] active:!scale-[0.98] transition-all"
                            >
                                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <p className="text-center mt-5 text-sm text-gray-400">
                    Chưa có tài khoản?{" "}
                    <Link
                        href="/register"
                        className="font-semibold text-[#1a1a2e] hover:underline"
                    >
                        Đăng ký ngay
                    </Link>
                </p>

                <p className="text-center mt-5 text-xs text-gray-300">
                    © 2026 SurveyHub &nbsp;·&nbsp;
                    <Link
                        href="/privacy"
                        className="hover:text-gray-400 transition-colors"
                    >
                        Chính sách bảo mật
                    </Link>
                    &nbsp;·&nbsp;
                    <Link
                        href="/terms"
                        className="hover:text-gray-400 transition-colors"
                    >
                        Điều khoản
                    </Link>
                </p>
            </div>
        </div>
    );
}

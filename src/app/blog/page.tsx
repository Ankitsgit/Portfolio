import { redirect } from "next/navigation";

export const metadata = {
  title: "resume",
  description: "My thoughts on software development, life, and more.",
};

export default function BlogPage() {
  redirect("https://drive.google.com/file/d/1hP8guBF5po5QlFd1LR2a7nPzG1ym7VSh/view?usp=sharing");
}

import { UserButton } from "@clerk/astro/components";

export default function UserProfileButton() {
    return <UserButton afterSignOutUrl="/" />;
}
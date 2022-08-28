import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline"

export default function Sidebar() {
	return (
		<div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
			{/* Twitter Lgo */}
			<div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
				<Image width="50px" height="50px" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="Twitter-Logo"></Image>
			</div>
			{/* Menu */}
			<div className="mt-4 mb-2.5 xl:items-start">
				<SidebarMenuItem text="首頁" Icon={HomeIcon} active />
				<SidebarMenuItem text="探索" Icon={HashtagIcon} />
				<SidebarMenuItem text="通知" Icon={BellIcon} />
				<SidebarMenuItem text="訊息" Icon={InboxIcon} />
				<SidebarMenuItem text="書籤" Icon={BookmarkIcon} />
				<SidebarMenuItem text="列表" Icon={ClipboardIcon} />
				<SidebarMenuItem text="個人資料" Icon={UserIcon} />
				<SidebarMenuItem text="更多" Icon={DotsCircleHorizontalIcon} />
			</div>

			{/* Button */}

			<button className="bg-sky-500 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">推文</button>

			{/* Mini-Profile */}

			<div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto ">
				<img src="/images/anya.png" alt="User-image" className="h-10 w-10 rounded-full xl:mr-2"/>
				<div className="leading-5 hidden xl:inline">
					<h4 className="font-bold">Yan-Yu Wang</h4>
					<p className="text-gray-500">@yanyuwang</p>
				</div>
				<DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
			</div>

		</div>
	)
}

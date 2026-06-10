import {IServices} from "@/types/services-interface";
import { LuShoppingCart, LuBookmark, LuCircleUser } from "react-icons/lu";
import {APP_ROUTES} from "@/routes/app.route";

export const SERVICES_DATA: IServices[] = [
    {
        name: "cart",
        icon: LuShoppingCart,
        href: APP_ROUTES.cart(),
    },
    {
        name: "sell",
        icon: LuBookmark,
        href: APP_ROUTES.sell(),
    },
    {
        name: "profile",
        icon: LuCircleUser,
        href: APP_ROUTES.profile(),
    },
];

import CopyRight from "/components/footer/copyright.tsx";
import { T } from "/state.ts";

export default function Footer() {
    const t = T.value!;
    const menu = [];
    const socials = [];
    return (
        <footer>
            <CopyRight />
        </footer>
    );
}
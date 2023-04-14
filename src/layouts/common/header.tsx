import styles from './CommonHeader.module.scss';


import Link from "next/link";
import { HeaderItem } from "@/lib/header-navigation";

interface Props {
  items: Array<HeaderItem>
}

const CommonHeader = ({ items }: Props) => {
  return (
    <div className={styles.header_wrapper}>
      <ul className={styles.navigation_list}>
        { items.map(item => {
          return (
            <li key={item.id}>
              { item.href ?
                <Link href={item.href}>
                  {item.label}
                </Link>
                : <span>
                  {item.label}
                </span>
              }
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default CommonHeader;
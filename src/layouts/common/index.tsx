// 'use client';

import Link from "next/link";
import CommonHeader from "@/layouts/common/header";
import styles from './CommonLayout.module.scss';

import headerItems from '@/static/header-items';

export default function CommonLayout({ children }) {
  return (
    <div className={styles.layout_wrapper}>
      <CommonHeader items={headerItems.commonItems} />
      <hr />
      <h6>Layout comum</h6>
      {children}
      <Link href={"/"}>Voltar</Link>
      <hr />
    </div>
  );
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("FAQ")
export class Faq {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 카테고리
  @Column("varchar", { name: "CTGRY", length: 200 })
  ctgry: string;

  // 질문
  @Column("varchar", { name: "QSTN", length: 500 })
  qstn: string;

  // 답변
  @Column("varchar", { name: "ANS", length: 500 })
  ans: string;

  // 주소
  @Column("varchar", { name: "URL", nullable: true, length: 500 })
  url: string | null;

  // 이미지
  @Column("varchar", { name: "IMG", nullable: true, length: 200 })
  img: string | null;

  // 카운트
  @Column("int", { name: "CNT" })
  cnt: number;
  
  // 자주 물어보는 질문 
  @Column("tinyint", { name: "FAQ", width: 1 })
  faq: boolean;
}

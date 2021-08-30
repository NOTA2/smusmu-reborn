import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("BRD")
export class Board {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 게시판 키
  @Column("varchar", { name: "BRD_KEY", length: 50 })
  boardKey: string;

  // 게시판 이름
  @Column("varchar", { name: "BRD_NM", length: 50 })
  boardName: string;

  // 게시판 아이콘
  @Column("varchar", { name: "BRD_CN", nullable: true, length: 100 })
  boardIcon: string | null;

  // 게시판 등급 
  @Column("int", { name: "BRD_GRD", nullable: true })
  boardGrade: number | null;
}

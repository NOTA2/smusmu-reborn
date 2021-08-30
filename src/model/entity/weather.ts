import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("WTHR")
export class Weather {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 날짜
  @Column("date", { name: "DT" })
  date: string;

  // 내용
  @Column("longtext", { name: "CNTNT" })
  content: string;
}

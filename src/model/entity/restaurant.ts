import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("RSTRN")
export class Restaurant {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 날짜
  @Column("date", { name: "DT" })
  date: string;

  // 장소
  @Column("varchar", { name: "PLC", length: 30 })
  place: string;

  // 내용
  @Column("longtext", { name: "CNTNT", nullable: true })
  content: string | null;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MJR")
export class Major {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 단과 대학
  @Column("varchar", { name: "CLGE", length: 100 })
  college: string;

  // 전공
  @Column("varchar", { name: "MJR_NAME", length: 255 })
  majorName: string;

  // 전공 홈페이지
  @Column("varchar", { name: "MJR_PAGE", nullable: true, length: 100 })
  hompage: string | null;
}

import { Column, Entity } from "typeorm";

@Entity("ACDMY_CLNDR")
export class AcademicCalendar {
  @Column("int", { primary: true, name: "ID" })
  id: number;

  // 월
  @Column("varchar", { name: "MTH", length: 30 })
  month: string;

  // 일
  @Column("varchar", { name: "DT", length: 100 })
  date: string;

  // 내용
  @Column("varchar", { name: "CNTNT", length: 500 })
  content: string;

  // 동의어
  @Column("varchar", { name: "SYN", nullable: true, length: 500 })
  synonym: string | null;
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("VT")
export class Vote {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 질문
  @Column("longtext", { name: "QST" })
  question: string;

  // 투표 타입
  @Column("tinyint", { name: "VT_TYP" })
  votetype: number;

  // 중복투표 허용여부
  @Column("tinyint", { name: "DUPL_TYP", width: 1 })
  duplicateType: boolean;

  // 마감일
  @Column("date", { name: "EXPRY_DATE" })
  expirationDate: string;

  // 투표 상태 
  @Column("tinyint", { name: "VT_STT" })
  voteState: number;
}

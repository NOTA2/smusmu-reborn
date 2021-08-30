import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FestivalTimeline } from "./festivaltimeline";

@Entity("FSTVL")
export class Festival {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 개최자
  @Column("varchar", { name: "HOST", length: 200 })
  host: string;

  // 행사명
  @Column("varchar", { name: "EVNT_NM", length: 200 })
  eventName: string;

  // 행사 시작시간
  @Column("datetime", { name: "EVNT_STRT" })
  startTime: Date;

  // 행사 종료시간
  @Column("datetime", { name: "EVNT_END" })
  endTime: Date;

  // 장소
  @Column("varchar", { name: "PLACE", length: 200 })
  place: string;

  // 행사 종류
  @Column("varchar", { name: "SORT", length: 100 })
  eventSort: string;

  // 포인트
  @Column("int", { name: "POINT" })
  point: number;

  // 행사 설명
  @Column("varchar", { name: "DSCRP", nullable: true, length: 500 })
  description: string | null;

  // 설문조사 참여 여부
  @Column("tinyint", { name: "SRVY_YN", nullable: true, width: 1 })
  surveyYN: boolean | null;

  // 큐알코드
  @Column("varchar", { name: "QR_VALUE", length: 300 })
  qrCode: string;

  @OneToMany(()=> FestivalTimeline, festivaltimeline => festivaltimeline.festival)
  festivaltimeline: FestivalTimeline[];
}

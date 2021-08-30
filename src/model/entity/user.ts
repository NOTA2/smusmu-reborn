import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Major } from "./major";
import { FestivalTimeline } from "./festivaltimeline";

@Entity("USR")
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 사용자 이름
  @Column("varchar", { name: "NAME", length: 50 })
  name: string;

  // 비밀번호
  @Column("varchar", { name: "PW", length: 50 })
  password: string;

  // 암호화
  @Column("varchar", { name: "SALT", length: 255 })
  salt: string;

  // 닉네임
  @Column("varchar", { name: "NCKN", nullable: true, length: 50 })
  nickname: string | null;

  // 카카오아이디
  @Column("varchar", { name: "KK_ID", length: 255 })
  kakaoId: string;

  // 학번
  @Column("int", { name: "SCHL_ID" })
  schoolId: number;

  // 전화번호
  @Column("varchar", { name: "PHN", length: 20 })
  phone: string;

  // 이메일
  @Column("varchar", { name: "EML", length: 255 })
  email: string;

  // 이메일 인증 여부
  @Column("tinyint", { name: "EML_AUTH_YN", width: 1 })
  emailAuth: boolean;

  // 단과대학
  @Column("varchar", { name: "CLGE", length: 100 })
  college: string;

  // 전공ID 외래키 
  @OneToOne(()=> Major)
  @JoinColumn()
  major: Major;

  @OneToMany(()=> FestivalTimeline, festivaltimeline => festivaltimeline.user)
  festivaltimeline: FestivalTimeline[];
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("MAIN_MN")
export class MainMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 타이틀명
  @Column("varchar", { name: "TTL", nullable: true, length: 200 })
  title: string | null;

  // 설명
  @Column("varchar", { name: "DSCRP", nullable: true, length: 200 })
  description: string | null;

  // 썸네일
  @Column("varchar", { name: "THMBN", nullable: true, length: 500 })
  thumbnail: string | null;

  // 버튼
  @Column("longtext", { name: "BTN", nullable: true })
  buttons: string | null;

  // 메뉴 순서
  @Column("int", { name: "MN_ORD" })
  menuOrder: number;

  // 인증
  @Column("tinyint", { name: "AUTH_YN", width: 1 })
  auth: boolean;
}

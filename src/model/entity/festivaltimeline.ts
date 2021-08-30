import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Festival } from "./festival";

@Entity("FSTVL_TMLN")
export class FestivalTimeline {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 페스티벌 아이디 (외래키)
  @ManyToOne(type => Festival, festival => festival.festivaltimeline)
  festival: Festival;
  // @Column("int", { name: "FSTVL_ID" })
  // festivalId: number;

  // 사용자 아이디 (외래키)
  @ManyToOne(type => User, user => user.festivaltimeline)
  user: User;
  // @Column("int", { name: "USR_ID" })
  // usrId: number;

  @Column("datetime", { name: "WHEN_TIME" })
  whenTime: Date;
  
}

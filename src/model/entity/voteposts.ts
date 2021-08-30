import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from "./vote";

@Entity("VT_PST")
export class VotePosts {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 투표 게시글 ID 외래키 
  @OneToOne(()=> Vote)
  @JoinColumn()
  vote: Vote;

  // 선택지1
  @Column("varchar", { name: "OPTNS1", length: 100 })
  option1: string;

  // 선택지2
  @Column("varchar", { name: "OPTNS2", length: 100 })
  option2: string;

  // 선택지3
  @Column("varchar", { name: "OPTNS3", nullable: true, length: 100 })
  option3: string | null;

  // 선택지4
  @Column("varchar", { name: "OPTNS4", nullable: true, length: 100 })
  option4: string | null;

  // 선택지5
  @Column("varchar", { name: "OPTNS5", nullable: true, length: 100 })
  option5: string | null;
}

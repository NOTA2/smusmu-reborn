import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CMNT")
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 내용
  @Column("varchar", { name: "CNTNT", length: 300 })
  content: string;

  // 댓글 작성 모드 (익명, 별명, 본명 중)
  @Column("tinyint", { name: "CMNT_MD" })
  commentMode: number;

  // 댓글 작성시간
  @Column("datetime", { name: "CWRT_TM" })
  cwriteTime: Date;

  // 작성자 아이디 (외래키)
  @Column("int", { name: "CWRT_ID" })
  cwriterId: number;

  // 좋아요 수
  @Column("int", { name: "LK", default: () => "'0'" })
  like: number;

  // 게시글 아이디 (외래키)
  @Column("int", { name: "TPC_ID" })
  topicId: number;

  /* 기존 DB에서 가져온 것인데, 정확히 무엇을 의미하는지 모르겠습니다. 
   댓글 작성자 아이디가 맞을까요?*/
  @Column("int", { name: "RAUTH_ID", nullable: true })
  reauthId: number | null;

  /* 기존 DB에서 가져온 것인데, 정확히 무엇을 의미하는지 모르겠습니다. 
   댓글에 답글을 달은 사용자의 아이디가 맞을까요?*/
  @Column("int", { name: "RCMNT_ID", nullable: true })
  recommentId: number | null;
}

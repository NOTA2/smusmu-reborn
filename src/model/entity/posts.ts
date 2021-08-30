import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("PST")
export class Posts {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 기존 DB에 있던 것인데 bid가 의미하는 바를 모르겠습니다. 
  @Column("int", { name: "BID" })
  bid: number;

  // 제목
  @Column("varchar", { name: "TTL", length: 200 })
  title: string;

  // 내용
  @Column("longtext", { name: "CNTNT" })
  content: string;

  // 작성시간
  @Column("datetime", { name: "WRT_TM" })
  writeTime: Date;

  // 작성자 아이디
  @Column("int", { name: "WRTR_ID" })
  writeId: number;

  // 조회수
  @Column("int", { name: "VWS", nullable: true, default: () => "'0'" })
  views: number | null;

  // 좋아요 수
  @Column("int", { name: "LK", default: () => "'0'" })
  like: number;

  // 댓글 수
  @Column("int", { name: "CMNT", default: () => "'0'" })
  comment: number;

  // 글쓰기 모드(익명, 별멍, 본명 중)
  @Column("tinyint", { name: "WRT_MD" })
  writeMode: number;

  // 기존 DB에 있던 것인데 hits가 의미하는 바를 모르겠습니다. 
  @Column("int", { name: "HTS" })
  hits: number;
}

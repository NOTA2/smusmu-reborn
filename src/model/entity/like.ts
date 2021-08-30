import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("LK")
export class Like {
  @PrimaryGeneratedColumn({ type: "int", name: "ID" })
  id: number;

  // 대상 ID
  @Column("int", { name: "TRGT_ID" })
  targetId: number;

  // 대상 타입
  @Column("tinyint", { name: "TRGT_TYP" })
  targetType: number;

  // 기존DB에서 authId 컬럼을 가져온 것입니다. 정확히 무얼 의미하는지 모르겠습니다.
  @Column("int", { name: "WRT_ID" })
  writerId: number;

  // 기존 컬럼에서 targetAuthId 컬럼을 가져온 것입니다. 정확히 무얼 의미하는지 모르겠습니다.
  @Column("int", { name: "TRGT_WRTID" })
  targetWriterId: number;

  // 호감 여부
  @Column("tinyint", { name: "LK_TYP" })
  likesType: number;
}

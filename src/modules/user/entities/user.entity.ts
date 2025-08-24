import { Column, Entity } from 'typeorm';
import { UserRoleEnum } from '../enums/user-role.enum';
import { BasicEntity } from 'src/common/entities/basic.entity';

@Entity()
export class User extends BasicEntity {
  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: true,
  })
  email?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  password?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    unique: true,
  })
  nickname?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  city?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  district?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  profileImageUrl?: string | null;

  @Column({
    type: 'varchar',
    length: 255,
    default: 'local',
  })
  provider: string = 'local';

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  providerId?: string | null;

  @Column({
    type: 'int',
    nullable: true,
  })
  locationId?: number | null;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  lastLogin?: Date | null;

  @Column({
    type: 'varchar',
    length: 255,
  })
  status: string = '';

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.USER,
  })
  role: UserRoleEnum = UserRoleEnum.USER;

  // chatHistories: ChatHistory[] = [];

  // chatSessions: ChatSession[] = [];

  // comments: Comment[] = [];

  // logs: Log[] = [];

  // magazineBookmarks: MagazineBookmark[] = [];

  // magazineLikes: MagazineLike[] = [];

  // triggerNotifications: Notification[] = [];

  // notifications: Notification[] = [];

  // quizAnswers: QuizAnswer[] = [];

  // socialAccounts: SocialAccount[] = [];

  // tips: Tip[] = [];

  // tipLikes: TipLike[] = [];

  // tipSaves: TipSave[] = [];

  // location?: Location | null;

  // hashtags: UserHashtag[] = [];

  // userStatistics?: UserStatistic | null;
}

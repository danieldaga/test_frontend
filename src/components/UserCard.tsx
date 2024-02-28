import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface UserCardProps {
  avatarUrl: string;
  userName: string;
  userMail: string;
  userPhone: string;
}

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  userName,
  userMail,
  userPhone,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center">
          <div className="w-24 h-24 flex justify-center items-center bg-gray-200 rounded-full">
            <Avatar className="">
              <AvatarImage src={avatarUrl} />
            </Avatar>
          </div>
        </div>

        <CardTitle>{userName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Email: {userMail}</p>
        <p>Phone: {userPhone}</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;

import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams): boolean => {
  const activityIndex = activities.findIndex((a: string) => a == activity);
  const roleIndex = roles.findIndex((r: string) => r == role);
  if(activityIndex > roleIndex)
    return false;
  return true;
};

export default useIsVerified;

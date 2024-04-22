import { GridColDef } from "@mui/x-data-grid";
import { AlertColor } from "@mui/material/Alert";

export interface ButtonData {
  name: string;
  to?: string;
  onClick: (e?: any) => void;
}

export interface ReviewData {
  name: string;
  avatarSrc: string;
  title: string;
  reviewer: string;
  comment: string;
  rating: number;
}

export interface PieGraphData {
  value: number;
  label: string;
  width: number;
  height: number;
}

export interface RowData {
  id: number;
  lastName: string;
  firstName: string;
  age: number | null;
}

export interface UsersLayoutData {
  mode: string;
  loading?: boolean;
  messages?: string[];
  newMessageState?: {
    Active: boolean;
    message: string;
  };
  snackbarState?: {
    active: boolean;
    severity: AlertColor;
    message: string;
  };
  newsFeedExpandedState?: boolean[];
  titleBox?: string;
  titleBox1?: string;
  titleBox2?: string;
  titleBox4?: string;
  titleBox6?: string;
  titleBox7?: string;
  titleBox8?: string;
  titleBox9?: string;
  titleBox10?: string;
  userType: "admin" | "vendor" | "consumer";
  
  userImageUrl?: string;
  userImgSize?: number;
  videoUrl?: string;

  includeAdditionalActions?: boolean;
  includeAdminActions?: boolean;
  includeUserPicture?: boolean;
  includeNewsFeed?: boolean;
  includeMessages?: boolean;
  includeBasedOnUserInterest?: boolean;
  includeUserCalendar?: boolean;
  includeUserPurchaseHistory?: boolean;
  includeStoreReviews?: boolean;
  includeButtonsActions?: boolean;
  includeVendorEmployeesTable?: boolean;
  includeSnackbarPopup?: boolean;
  includePieGraph?: boolean;
  includeBarGraph?: boolean;
  includeTitleBox?: boolean;
  includeTitleBox1?: boolean;
  includeTitleBox2?: boolean;
  includeTitleBox4?: boolean;
  includeTitleBox6?: boolean;
  includeTitleBox7?: boolean;
  includeTitleBox8?: boolean;
  includeTitleBox9?: boolean;
  includeAboutUsPicture1?: boolean;
  includeAboutUsPicture2?: boolean;
  includeAboutUsCarousel?: boolean;
  includeAboutUsSearchTable?: boolean;
  includeAboutUsTopSellers?: boolean;
  includeAboutUsMediaVideo?: boolean;
  aboutUsCarouselImages?: Array<{
    img: string;
    title: string;
    author: string;
    cols?: number;
    rows?: number;
    featured?: boolean;
  }>;
  handleMessageSend?: () => void;
  handleNewMessage?: (message: string) => void;
  handleMessageDelete?: (message: string) => void;
  handleSnackbarClosed?: () => void;
  handleExpansion?: (idx: number) => void;
  data?: PieGraphData[];
  columns?: GridColDef[];
  rows?: RowData[];
  buttonsData?: ButtonData[];
  reviews?: ReviewData[];
}

export interface ColumnHistory {
  id: "name" | "code" | "population" | "size" | "density";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}
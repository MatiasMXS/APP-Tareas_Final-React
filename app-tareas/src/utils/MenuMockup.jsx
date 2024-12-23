import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter7Icon from '@mui/icons-material/Filter7';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
export const menuMockup = [
  {
    id: 1,
    titulo: "Listado tareas",
    path: "/dashboard",
    icon: <ChecklistTwoToneIcon />,
  },
  {
    id: 2,
    titulo: "Agregar tareas",
    path: "/add",
    icon: <AddCircleOutlineIcon />,
  },
  
  { kind: "divider" },
  { kind: "header", title: "Filtrado" },
  {
    id: 3,
    titulo: " Por Priorida",
    icon: <BarChartIcon />,
    children: [
      {
        id: 4,
        titulo: "Alta",
        path: "/dashboard/prioridad/alta",
        icon: <PriorityHighIcon />,
      },
      {
        id: 5,
        titulo: "Media",
        path: "/dashboard/prioridad/media",
        icon: <DescriptionIcon />,
      },
      {
        id: 6,
        titulo: "Baja",
        path: "/dashboard/prioridad/baja",
        icon: <LowPriorityIcon />,
      },
      
    ],
  },
  {
    id: 7,
    titulo: "Por vencer",
    icon: <AccessTimeIcon />,
    children: [
      {
        id: 8,
        titulo: "Hoy",
        path: "/dashboard/dia-a-vencer/1",
        icon: <Filter1Icon />,
      },
      {
        id: 9,
        titulo: "Mañana",
        path: "/dashboard/dia-a-vencer/2",
        icon: <Filter2Icon />,
      },
      {
        id: 10,
        titulo: "En la semana",
        path: "/dashboard/dia-a-vencer/7",
        icon: <Filter7Icon />,
      },
    ],
  },
];
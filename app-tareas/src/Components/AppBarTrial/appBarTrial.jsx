import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';

const NAVIGATION = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    title: 'Orders',
    icon: <ShoppingCartIcon />,
    path: '/add',
  },
  {
    title: 'Reports',
    icon: <BarChartIcon />,
    path: '/reports',
    children: [
      {
        title: 'Sales',
        icon: <DescriptionIcon />,
        path: '/reports/sales',
      },
      {
        title: 'Traffic',
        icon: <DescriptionIcon />,
        path: '/reports/traffic',
      },
    ],
  },
  {
    title: 'Integrations',
    icon: <LayersIcon />,
    path: '/integrations',
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
});

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

function NavigationMenu() {
  return (
    <nav>
      <ul>
        {NAVIGATION.map((item) => (
          <li key={item.title}>
            <Link to={item.path}>
              {item.icon} {item.title}
            </Link>
            {item.children && (
              <ul>
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link to={child.path}>
                      {child.icon} {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function DashboardLayoutBasic() {
  return (
    <Router>
      <DashboardLayout>
        <NavigationMenu />
        <PageContainer>
          <Routes>
            <Route
              path="/dashboard"
              element={<ContentSkeleton title="Dashboard" />}
            />
            <Route
              path="/orders"
              element={<ContentSkeleton title="Orders" />}
            />
            <Route
              path="/reports/sales"
              element={<ContentSkeleton title="Sales Reports" />}
            />
            <Route
              path="/reports/traffic"
              element={<ContentSkeleton title="Traffic Reports" />}
            />
            <Route
              path="/integrations"
              element={<ContentSkeleton title="Integrations" />}
            />
          </Routes>
        </PageContainer>
      </DashboardLayout>
    </Router>
  );
}

function ContentSkeleton({ title }: { title: string }) {
  return (
    <div>
      <h1>{title}</h1>
      <Grid container spacing={1}>
        <Grid size={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid size={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={8}>
          <Skeleton height={100} />
        </Grid>
        <Grid size={12}>
          <Skeleton height={150} />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardLayoutBasic;

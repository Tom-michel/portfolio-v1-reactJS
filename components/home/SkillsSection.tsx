import { Box, Grid, iconClasses } from "@mui/material";
import Sphere from "./skills/Sphere";
import SectionTitle from "../SectionTitle";

const SkillsSection = () => {
  const slugs = ["javascript", "java", "dart", "typescript"];
  return (
    <Box className="skills-section" sx={{ my: 5, px: { xs: 0, sm: 2 } }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <SectionTitle
            title="Skills/Stack"
            number="03"
            description={
              <>
                I use many techonlogies and tools to build professionnal
                applications and mockups.
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Sphere />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;

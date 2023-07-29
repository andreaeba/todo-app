import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Logo from "../assets/logo-todo.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function FixedContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <Box>
            <img src={Logo} />
          </Box>

          <Box
            bgcolor="white"
            p={1}
            border="1px solid red"
            borderRadius={2}
            m={2}
            display="flex"
            justifyContent='space-around'
            alignItems='center'
          >
            <Box display='flex' flexDirection='column' alignItems='start'>
              <Typography variant="h5" component="h5" fontWeight={600}>
                Hola, Andrea
              </Typography>
              <Typography variant="body2">You have 5 tasks to accomplish today!</Typography>
            </Box>

              <AccountCircleIcon sx={{ fontSize: 50 }} />
           
          </Box>

          <p>
            Holaaaaaaaaaaaaaaa desde Fixed dslkjdlkdsfjdskfjsdlkfjsdlkfj Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Beatae ad
            repellat sequi vitae sunt quam officiis omnis, aut mollitia? Nobis
            unde sapiente ut vero excepturi sit ea corporis doloribus velit!
            Fugit eos quos, ducimus ea iure nam veritatis, ipsam harum odio
            consequuntur commodi veniam assumenda itaque tenetur corporis ut
            dolorem! Repellendus vero aspernatur maxime eveniet sint totam est
            et placeat! Est ut velit ab modi voluptatum? Quasi autem dignissimos
            at dolorum, distinctio nostrum, aut, alias sed similique ipsum ad
            perferendis adipisci nemo eos consectetur omnis vitae recusandae ea
            quo quisquam. Debitis eligendi fugiat natus placeat labore amet
            explicabo, sequi, nulla quidem necessitatibus assumenda tenetur,
            quibusdam rem enim facere! Commodi mollitia vero nesciunt at veniam
            earum id sit distinctio laudantium quasi! Illo molestiae quidem quis
            eligendi nulla ipsam dolore ab corporis ex tempore deleniti dicta
            provident accusamus iure facere itaque ipsa blanditiis soluta, esse
            tenetur minima! Perspiciatis a reiciendis nesciunt incidunt. Magni
            distinctio quas corrupti perspiciatis quisquam incidunt
            exercitationem, maxime laudantium, pariatur accusamus enim cum
            doloribus, nam odit minima hic soluta cupiditate inventore esse
            dolore a minus? Repudiandae illo consequuntur tempore. Ab commodi
            perferendis aliquam assumenda natus maiores quis saepe ipsam
            eligendi nisi architecto odit, fuga obcaecati, est nesciunt eaque
            facere. Inventore nisi dolorum saepe voluptatum doloribus maiores
            officia quaerat ea. Expedita tempora aut quibusdam officia tempore
            quae perspiciatis fuga consectetur, molestiae, nisi tenetur ea ipsum
            velit esse temporibus, magni recusandae? Vel provident quaerat
            dicta, incidunt error aspernatur distinctio a laudantium? Animi,
            vero soluta natus facilis eveniet recusandae enim asperiores sint!
            Aut quasi molestiae labore exercitationem minima suscipit! Possimus
            deserunt dignissimos tenetur dolores perspiciatis illum, totam
            eveniet voluptatum in. Consequuntur, iste. Facilis quaerat, optio
            quibusdam perspiciatis dignissimos laborum ad provident vel. Nihil
            veniam, iste totam possimus velit veritatis quisquam facere
            blanditiis a mollitia in consectetur, nisi ea! Recusandae animi
            omnis harum! Temporibus corrupti amet expedita vero possimus sequi,
            culpa, iste repellendus delectus natus porro qui facilis distinctio.
            In provident quae ipsam quia ex tempora suscipit, illum amet quidem
            adipisci facilis tenetur. Quaerat eligendi minima nulla quisquam ad,
            numquam sit provident illum sapiente est cupiditate accusamus animi
            consectetur deleniti aliquam eius sunt iure, nesciunt eveniet hic
            magni amet odit, odio error! Sequi? Mollitia optio, adipisci qui
            reiciendis enim iste tenetur facilis ipsa quod consequatur magnam,
            quidem doloremque ipsum temporibus aliquam laborum? Ipsam,
            voluptates fuga dolorum amet non nihil expedita. Quisquam, id
            laudantium. Pariatur laborum facere alias, quisquam dolores eos!
            Voluptate molestiae quidem vel reiciendis ipsa corrupti magnam
            repellat? Commodi, quas consectetur nihil aliquam quis, nam dolor
            repellendus, vitae corporis culpa recusandae. Officia. Aut at
            repellendus earum ratione ipsum debitis eos dolor natus minima,
            exercitationem nihil deserunt quod iusto tempora nisi atque,
            corporis molestias consequuntur soluta mollitia animi? Optio
            necessitatibus voluptatem sed eius? Quia explicabo deleniti
            exercitationem natus accusamus modi quo nihil. Accusantium fugiat
            consectetur sit mollitia eos ducimus enim harum repellendus
            exercitationem, ab porro, cupiditate deserunt odio sequi pariatur
            libero quo natus? Molestiae culpa impedit temporibus qui modi vel
            voluptas magni numquam doloremque quas mollitia perferendis ea odio
            dolores fugit laborum, corrupti eveniet porro facere fuga veniam
            perspiciatis minus iure labore? Exercitationem. Natus sint veritatis
            blanditiis dicta dolorem molestiae saepe soluta perferendis at
            ratione iste eius, amet qui voluptas! Dolores temporibus accusantium
            corrupti! Odit quos nisi ducimus suscipit minima sint laboriosam
            nesciunt. Deleniti ex soluta quos in eius officiis aliquam possimus
            corporis aspernatur dolore? Non iste vitae eaque omnis delectus
            perferendis, deleniti quia repudiandae libero. Deserunt, voluptatum
            adipisci? Error tempora placeat eveniet. Ratione, officiis a itaque
            tenetur recusandae assumenda facere beatae at earum adipisci
            voluptatum possimus sit voluptates perspiciatis porro ipsa esse
            consequuntur illo voluptate velit eos quo, temporibus id! Sed,
            blanditiis?
          </p>
        </Box>
      </Container>
    </>
  );
}
